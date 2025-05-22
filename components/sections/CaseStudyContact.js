import { ArrowRightShort } from "react-bootstrap-icons";
import { useForm } from "react-hook-form";
import swal from "sweetalert";

export default function CaseStudyContact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data, e) => {
    e.preventDefault();

    const formData = new FormData(); // Buat objek FormData yang benar

    for (const key in data) {
      formData.append(key, data[key]);
    }

    await fetch(
      "https://script.google.com/macros/s/AKfycbxZTcewbwnGbSoo8CAEc2bFon6i1fqv7_7ZU0UNKmtgofYVIMFALEZUcACnv8DZBUVD/exec",
      {
        method: "POST",
        body: formData,
      }
    )
      .then(() => {
        swal({
          title: "Thanks for your interest!",
          text: "We'll be in touch soon!",
          icon: "success",
          buttons: false,
        });
      })
      .catch(() => {
        swal({
          title: "Oops...",
          text: "Something went wrong!",
          icon: "error",
          buttons: false,
        });
      });
    reset();
  };

  return (
    <section className="contact py-3 py-lg-5">
      <div className="container py-lg-5">
        <div className="row">
          <div className="col-lg-7">
            <h2 className="second__title text-uppercase">Get in touch</h2>
            <p>Tell us more about yourself and what you've got in mind</p>
          </div>
          <div className="col-lg-5">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-outline mb-4">
                <input
                  {...register("name", {
                    required: true,
                  })}
                  type="text"
                  id="fullName"
                  className="form-control custom-form rounded-0"
                  placeholder="Full name"
                />
                {errors.name?.type === "required" && (
                  <small className="text-danger ps-1">Name is required!</small>
                )}
              </div>
              <div className="form-outline mb-4">
                <input
                  {...register("email", {
                    required: true,
                    pattern:
                      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  })}
                  type="email"
                  id="form1Example1"
                  className="form-control rounded-0"
                  placeholder="Email address"
                />
                {errors.email?.type === "required" && (
                  <small className="text-danger ps-1">Email is required!</small>
                )}
                {errors.email?.type === "pattern" && (
                  <small className="text-danger ps-1">
                    Use the correct email format!
                  </small>
                )}
              </div>
              <div className="form-outline mb-4">
                <textarea
                  {...register("message", { required: true })}
                  id="message"
                  rows="8"
                  placeholder="Message"
                  className="form-control rounded-0"
                />
                {errors.message?.type === "required" && (
                  <small className="text-danger ps-1">
                    Message is required!
                  </small>
                )}
              </div>
              <button
                onClick={handleSubmit(onSubmit)}
                className={`${
                  isSubmitting ? "disabled" : ""
                } btn main-button d-flex align-items-center`}
              >
                {isSubmitting ? "Submitting" : "Submit"}
                <ArrowRightShort className="arrow-right fs-4 fw-bolder" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

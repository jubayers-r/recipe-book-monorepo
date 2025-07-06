import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Mail, Send } from "lucide-react";

const NewsletterCard = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    toast.success("Subscribed successfully!");
    console.log("Newsletter signup data:", data);
    reset();
  };

  return (
    <section className="bg-gray-900 text-white py-16 px-6 md:px-12 lg:px-24 my-20 rounded-4xl mx-auto w-[70%]">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-extrabold">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-sm md:text-base opacity-90">
          Get delicious recipes, latest news, and kitchen inspiration straight
          to your inbox.
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-2xl mx-auto"
        >
          <div className="w-full md:flex-1">
            <label className="input input-bordered flex items-center gap-2 bg-white text-black w-full">
              <Mail className="w-5 h-5 text-gray-500" />
              <input
                type="email"
                placeholder="Enter your email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email format",
                  },
                })}
                className="grow bg-transparent outline-none"
              />
              {errors.email && (
                <p className="text-error text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </label>
          </div>

          <button
            type="submit"
            className="hover:bg-[#00ed64] hover:rounded-full hover:border hover:border-black  flex btn w-fit my-3"
          >
            Subscribe <Send className="w-4 h-4 ml-2" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterCard;

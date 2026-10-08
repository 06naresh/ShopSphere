import { useState } from "react";

import Button from "../../../shared/components/Button";
import Card from "../../../shared/components/Card";
import Input from "../../../shared/components/Input";

function CheckoutForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    password: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] =
    useState(false);
  const [success, setSuccess] =
    useState(false);
  const [serverError, setServerError] =
    useState("");

  const validateField = (
    name,
    value
  ) => {
    switch (name) {
      case "name":
        if (!value.trim()) {
          return "Name is required.";
        }

        if (value.trim().length < 3) {
          return "Name must be at least 3 characters.";
        }

        return "";

      case "email":
        if (!value.trim()) {
          return "Email is required.";
        }

        if (
          !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
            value
          )
        ) {
          return "Enter a valid email address.";
        }

        return "";

      case "phone":
        if (!value.trim()) {
          return "Phone number is required.";
        }

        if (!/^[0-9]{10}$/.test(value)) {
          return "Enter a valid 10-digit phone number.";
        }

        return "";

      case "city":
        if (!value.trim()) {
          return "City is required.";
        }

        return "";

      case "password":
        if (!value) {
          return "Password is required.";
        }

        if (value.length < 6) {
          return "Password must be at least 6 characters.";
        }

        return "";

      case "terms":
        if (!value) {
          return "You must accept the terms.";
        }

        return "";

      default:
        return "";
    }
  };

  const validateForm = () => {
    const newErrors = {};

    Object.entries(formData).forEach(
      ([name, value]) => {
        const error = validateField(
          name,
          value
        );

        if (error) {
          newErrors[name] = error;
        }
      }
    );

    return newErrors;
  };

  const handleChange = (event) => {
    const {
      name,
      value,
      type,
      checked,
    } = event.target;

    const newValue =
      type === "checkbox"
        ? checked
        : value;

    setFormData((previous) => ({
      ...previous,
      [name]: newValue,
    }));

    setSuccess(false);
    setServerError("");

    if (touched[name]) {
      const error = validateField(
        name,
        newValue
      );

      setErrors((previous) => ({
        ...previous,
        [name]: error,
      }));
    }
  };

  const handleBlur = (event) => {
    const { name, value, type, checked } =
      event.target;

    const fieldValue =
      type === "checkbox"
        ? checked
        : value;

    setTouched((previous) => ({
      ...previous,
      [name]: true,
    }));

    const error = validateField(
      name,
      fieldValue
    );

    setErrors((previous) => ({
      ...previous,
      [name]: error,
    }));
  };

  const handleSubmit = async (
    event
  ) => {
    event.preventDefault();

    setSuccess(false);
    setServerError("");

    const newErrors =
      validateForm();

    setErrors(newErrors);

    setTouched({
      name: true,
      email: true,
      phone: true,
      city: true,
      password: true,
      terms: true,
    });

    if (
      Object.keys(newErrors).length > 0
    ) {
      return;
    }

    try {
      setIsSubmitting(true);

      await new Promise((resolve) =>
        setTimeout(resolve, 1000)
      );

      setSuccess(true);

      setFormData({
        name: "",
        email: "",
        phone: "",
        city: "",
        password: "",
        terms: false,
      });

      setErrors({});
      setTouched({});
    } catch (error) {
      setServerError(
        "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card
      title="Checkout"
      className="mt-10"
    >
      <form
        onSubmit={handleSubmit}
        className="space-y-5"
        noValidate
      >
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <Input
            label="Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter your name"
            error={
              touched.name
                ? errors.name
                : ""
            }
          />

          <Input
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter your email"
            error={
              touched.email
                ? errors.email
                : ""
            }
          />

          <Input
            label="Phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="10-digit phone number"
            error={
              touched.phone
                ? errors.phone
                : ""
            }
          />

          <Input
            label="City"
            name="city"
            value={formData.city}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter your city"
            error={
              touched.city
                ? errors.city
                : ""
            }
          />

          <Input
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Create a password"
            error={
              touched.password
                ? errors.password
                : ""
            }
          />
        </div>

        <div>
          <label className="flex items-start gap-3">
            <input
              type="checkbox"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
              onBlur={handleBlur}
              className="mt-1 h-4 w-4"
            />

            <span className="text-sm text-gray-700 dark:text-gray-200">
              I agree to the terms and
              conditions.
            </span>
          </label>

          {touched.terms &&
            errors.terms && (
              <p className="mt-1 text-sm text-red-500">
                {errors.terms}
              </p>
            )}
        </div>

        {serverError && (
          <div className="rounded-lg bg-red-50 p-4 text-sm text-red-700 dark:bg-red-950 dark:text-red-300">
            {serverError}
          </div>
        )}

        {success && (
          <div className="rounded-lg bg-green-50 p-4 text-sm text-green-700 dark:bg-green-950 dark:text-green-300">
            Order submitted successfully!
          </div>
        )}

        <Button
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting
            ? "Submitting..."
            : "Place Order"}
        </Button>
      </form>
    </Card>
  );
}

export default CheckoutForm;
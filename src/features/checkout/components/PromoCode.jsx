import { useState } from "react";

import Button from "../../../shared/components/Button";
import Card from "../../../shared/components/Card";
import Input from "../../../shared/components/Input";

function PromoCode() {
  const [promoCode, setPromoCode] =
    useState("");

  const [message, setMessage] =
    useState("");

  const [isValid, setIsValid] =
    useState(false);

  const applyPromoCode = () => {
    const code =
      promoCode.trim().toUpperCase();

    if (!code) {
      setMessage(
        "Please enter a promo code."
      );
      setIsValid(false);
      return;
    }

    if (code === "SAVE10") {
      setMessage(
        "Promo code applied! You saved 10%."
      );
      setIsValid(true);
      return;
    }

    setMessage(
      "Invalid promo code."
    );
    setIsValid(false);
  };

  return (
    <Card
      title="Promo Code"
      className="mt-6"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
        <Input
          label="Enter promo code"
          value={promoCode}
          onChange={(event) =>
            setPromoCode(
              event.target.value
            )
          }
          placeholder="Example: SAVE10"
          className="sm:flex-1"
        />

        <Button
          type="button"
          onClick={applyPromoCode}
          className="sm:mt-7"
        >
          Apply
        </Button>
      </div>

      {message && (
        <p
          className={`mt-3 text-sm ${
            isValid
              ? "text-green-600 dark:text-green-400"
              : "text-red-500"
          }`}
        >
          {message}
        </p>
      )}
    </Card>
  );
}

export default PromoCode;
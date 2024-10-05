"use client";

import { clashSans } from "@/font/font";
import React, { useState } from "react";
import { submitForm } from "@/action/action";
import toast, { Toaster } from "react-hot-toast";
import { z } from "zod";
import SelectVehicle from "./ui/select-vehicle";
import SelectVehicleType from "./ui/select-vehicle-type";
import { useTranslation } from "react-i18next";

const formSchema = z.object({
  name: z.string().min(1, "Le nom est requis"),
  email: z.string().email("Email invalide"),
  phone: z.string().min(1, "Le téléphone est requis"),
  vehicle: z.string().min(1, "Le nombre de véhicules est requis"),
  vehicleType: z.string().min(1, "La catégorie de véhicules est requise"),
  message: z.string().min(1, "Le message est requis"),
});

type FormDataType = z.infer<typeof formSchema>;

export default function Form() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { t } = useTranslation();

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true);
    const data: FormDataType = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      vehicle: formData.get("vehicle") as string,
      vehicleType: formData.get("vehicleType") as string,
      message: formData.get("message") as string,
    };
    try {
      const validatedData = formSchema.parse(data);
      const result = await submitForm(validatedData);
      if (result.success) {
        toast.success("Formulaire envoyé avec succès !");
      } else {
        toast.error(
          "Erreur lors de l'envoi du formulaire. Veuillez réessayer."
        );
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        console.log(error.message);
        error.errors.forEach((err) => {
          toast.error(err.message);
        });
      } else {
        toast.error("Une erreur est survenue. Veuillez réessayer.");
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <form
        action={handleSubmit}
        className="flex flex-col gap-4 bg-pale-pink p-4 lg:p-8 rounded-[16px]"
      >
        <div className="gap-3 grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col gap-2 md:gap-3">
            <label
              htmlFor="name"
              className="font-medium text-dark text-sm md:text-base"
              style={{ fontFamily: clashSans.style.fontFamily }}
            >
              {t("contact-us.form.name.label")}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder={t("contact-us.form.name.placeholder")}
              className="bg-white px-2.5 py-2 rounded-[6px] h-[48px] text-sm md:text-base placeholder-input-placeholder"
              required
            />
          </div>
          <div className="flex flex-col gap-2 md:gap-3">
            <label
              htmlFor="email"
              className="font-medium text-dark text-sm md:text-base"
              style={{ fontFamily: clashSans.style.fontFamily }}
            >
              {t("contact-us.form.email.label")}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder={t("contact-us.form.email.placeholder")}
              className="bg-white px-2.5 py-2 rounded-[6px] h-[48px] text-sm md:text-base placeholder-input-placeholder"
              required
            />
          </div>
        </div>
        <div className="gap-3 grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col gap-2 md:gap-3">
            <label
              htmlFor="phone"
              className="font-medium text-dark text-sm md:text-base"
              style={{ fontFamily: clashSans.style.fontFamily }}
            >
              {t("contact-us.form.phone.label")}
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder={t("contact-us.form.phone.placeholder")}
              className="bg-white px-2.5 py-2 rounded-[6px] h-[48px] text-sm md:text-base placeholder-input-placeholder"
              required
            />
          </div>
          <SelectVehicle />
        </div>
        <SelectVehicleType />
        <div className="flex flex-col gap-2 md:gap-3">
          <label
            htmlFor="message"
            className="font-medium text-dark text-sm md:text-base"
            style={{ fontFamily: clashSans.style.fontFamily }}
          >
            {t("contact-us.form.message.label")}
          </label>
          <textarea
            id="message"
            name="message"
            placeholder={t("contact-us.form.message.placeholder")}
            className="bg-white px-2.5 py-2 rounded-[6px] max-w-[100%] h-full max-h-[107px] md:max-h-[73px] text-sm md:text-base placeholder-input-placeholder"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="flex justify-center items-center bg-red-700 rounded-full w-full h-[52px] font-medium text-lg text-white"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>{t("contact-us.form.button.loading")}</>
          ) : (
            <>{t("contact-us.form.button.default")}</>
          )}
        </button>
      </form>
    </>
  );
}

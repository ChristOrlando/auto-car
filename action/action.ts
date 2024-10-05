"use server";

import nodemailer from "nodemailer";
import { z } from "zod";

const formSchema = z.object({
    name: z.string().min(1, "Le nom est requis"),
    email: z.string().email("Email invalide"),
    phone: z.string().min(1, "Le téléphone est requis"),
    vehicle: z.string().min(1, "Le nombre de véhicules est requis"),
    vehicleType: z.string().min(1, "La catégorie de véhicules est requise"),
    message: z.string().min(1, "Le message est requis"),
});

type FormData = z.infer<typeof formSchema>;

export async function submitForm(formData: FormData) {
    try {
        const validatedData = formSchema.parse(formData);

        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: "christkomika7@gmail.com",
            subject: "Nouveau rendez-vous",
            html: `
        <!DOCTYPE html>
            <html lang="fr">
                <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Nouveau Rendez-vous</title>
                <style>
                    body {
                    font-family: Arial, sans-serif;
                    background-color: #f4f4f4;
                    margin: 0;
                    padding: 20px;
                    }
                    .container {
                    max-width: 600px;
                    margin: 0 auto;
                    background-color: #fff;
                    border-radius: 8px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    padding: 20px;
                    }
                    .header {
                    text-align: center;
                    background-color: #007BFF;
                    color: #fff;
                    padding: 10px 0;
                    border-radius: 8px 8px 0 0;
                    }
                    .header h1 {
                    margin: 0;
                    font-size: 24px;
                    }
                    .content {
                    padding: 20px;
                    }
                    .content h2 {
                    font-size: 18px;
                    color: #333;
                    }
                    .content p {
                    font-size: 16px;
                    color: #555;
                    margin-bottom: 10px;
                    }
                    .info {
                    background-color: #f9f9f9;
                    padding: 15px;
                    border-radius: 8px;
                    margin-bottom: 20px;
                    }
                    .info p {
                    margin: 8px 0;
                    }
                    .info span {
                    font-weight: bold;
                    color: #333;
                    }
                </style>
            </head>
            <body>
            <div class="container">
                <!-- Header -->
                <div class="header">
                <h1>Nouveau rendez-vous</h1>
                </div>

                <!-- Content -->
                <div class="content">
                <h2>Bonjour,</h2>
                <p>Vous avez un nouveau rendez-vous avec les informations suivantes :</p>

                <div class="info">
                    <p><span>Nom :</span> ${validatedData.name}</p>
                    <p><span>Email :</span> ${validatedData.email}</p>
                    <p><span>Téléphone :</span> ${validatedData.phone}</p>
                    <p><span>Nombre de véhicules :</span> ${validatedData.vehicle}</p>
                    <p><span>Catégorie de véhicules :</span> ${validatedData.vehicleType}</p>
                    <p><span>Message :</span> ${validatedData.message}</p>
                </div>
                </div>
            </div>
            </body>
        </html>`
        };

        await transporter.sendMail(mailOptions);
        return { success: true };
    } catch (error) {
        console.error("Erreur lors de l'envoi de l'email:", error);
        return { success: false };
    }
}

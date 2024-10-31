import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import { ThemeProvider } from "next-themes";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Рабочий Пульс",
    description: "Эффективный менеджер трудозатрат",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru" suppressHydrationWarning>
            <head>
                <link rel="icon" href="/go.png" sizes="any" />
            </head>
            <body className={inter.className}>
                <ThemeProvider>{children}</ThemeProvider>
            </body>
        </html>
    );
}

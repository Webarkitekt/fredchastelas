import React from "react";
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

interface ContactInfoProps {
    name?: string;
    address?: string;
    city?: string;
    phone?: string;
    email?: string;
}

export const ContactInfo: React.FC<ContactInfoProps> = ({
    name = "Frédéric Chastelas",
    address = "12 rue Amoreux",
    city = "34090 MONTPELLIER",
    phone = "06 84 77 55 44",
    email = "frederic.chastelas@gmail.com",
}) => {
    return (
        <div className="my-8 max-w-2xl">
            <h3 className="font-serif text-3xl text-gray-700 mb-10">{name}</h3>

            <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-3">
                    <MapPinIcon className="w-6 h-6 text-primary flex-shrink-0" />
                    <div>
                        <div className="font-bold text-gray-700 text-base">Adresse</div>
                        <div className="text-gray-600 text-base">{address}<br />{city}</div>
                    </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">
                    <PhoneIcon className="w-6 h-6 text-primary flex-shrink-0" />
                    <div>
                        <div className="font-bold text-gray-700 text-base">Téléphone</div>
                        <a href={`tel:+33${phone.replace(/\s/g, '').substring(1)}`} className="text-interaction-default hover:underline text-base font-medium block">{phone}</a>
                    </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                    <EnvelopeIcon className="w-6 h-6 text-primary flex-shrink-0" />
                    <div>
                        <div className="font-bold text-gray-700 text-base">Email</div>
                        <a href={`mailto:${email}`} className="text-interaction-default hover:underline text-base break-all block">{email}</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

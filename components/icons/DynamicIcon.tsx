import React from "react";
import {
    ExclamationCircleIcon,
    ExclamationTriangleIcon,
    HandRaisedIcon,
    FireIcon,
    HeartIcon,
    SparklesIcon,
    AcademicCapIcon,
    UserGroupIcon,
    BriefcaseIcon,
    LightBulbIcon,
    ShieldCheckIcon,
    CheckCircleIcon,
} from "@heroicons/react/24/outline";

export type IconName =
    | "phobies"
    | "angoisses"
    | "inhibitions"
    | "colere"
    | "depression"
    | "autres"
    | "formation"
    | "groupe"
    | "entreprise"
    | "idee"
    | "securite"
    | "succes";

interface DynamicIconProps {
    name?: IconName;
    className?: string;
    size?: "sm" | "md" | "lg" | "xl";
}

const iconMap = {
    phobies: ExclamationCircleIcon,
    angoisses: ExclamationTriangleIcon,
    inhibitions: HandRaisedIcon,
    colere: FireIcon,
    depression: HeartIcon,
    autres: SparklesIcon,
    formation: AcademicCapIcon,
    groupe: UserGroupIcon,
    entreprise: BriefcaseIcon,
    idee: LightBulbIcon,
    securite: ShieldCheckIcon,
    succes: CheckCircleIcon,
};

const sizeMap = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-12 h-12",
    xl: "w-16 h-16",
};

export const DynamicIcon: React.FC<DynamicIconProps> = ({
    name,
    className = "",
    size = "lg",
}) => {
    if (!name || !iconMap[name]) {
        return null;
    }

    const IconComponent = iconMap[name];
    const sizeClass = sizeMap[size];

    return <IconComponent className={`${sizeClass} ${className}`} />;
};

export const iconOptions = [
    { value: "", label: "Aucune icône" },
    { value: "phobies", label: "Phobies (cercle alerte)" },
    { value: "angoisses", label: "Angoisses (alerte)" },
    { value: "inhibitions", label: "Inhibitions (main stop)" },
    { value: "colere", label: "Colère (feu)" },
    { value: "depression", label: "Dépression (cœur)" },
    { value: "autres", label: "Autres (étincelles)" },
    { value: "formation", label: "Formation (chapeau)" },
    { value: "groupe", label: "Groupe (personnes)" },
    { value: "entreprise", label: "Entreprise (mallette)" },
    { value: "idee", label: "Idée (ampoule)" },
    { value: "securite", label: "Sécurité (bouclier)" },
    { value: "succes", label: "Succès (check)" },
];

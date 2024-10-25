import React, { useCallback, useState } from 'react';

/**
 * Extrait l'ID de la vidéo YouTube à partir de l'URL
 * @param {string} url - L'URL de la vidéo YouTube
 * @returns {string|null} L'ID de la vidéo ou null si non trouvé
 */
const extractYoutubeId = (url: string): string | null => {
  if (!url) return null; // Vérification si l'URL est définie
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

/**
 * Convertit le temps au format mm:ss en secondes
 * @param {string} time - Le temps au format mm:ss
 * @returns {number} Le temps en secondes
 */
const convertTimeToSeconds = (time: string): number => {
  const parts = time.split(':');
  const minutes = parseInt(parts[0], 10) || 0; // Vérifie si les minutes sont définies
  const seconds = parseInt(parts[1], 10) || 0; // Vérifie si les secondes sont définies
  return minutes * 60 + seconds; // Conversion en secondes
};

interface YoutubeVideoProps {
  data: {
    url: string;
    thumbnailImage?: string;
  };
}

export const YoutubeVideo: React.FC<YoutubeVideoProps> = ({ data }) => {
  const { url, thumbnailImage } = data; // Suppression de thumbnailTime
  const videoId = useCallback(() => extractYoutubeId(url), [url])();
  const [isPlaying, setIsPlaying] = useState(false); // État pour gérer la lecture de la vidéo

  if (!videoId) {
    return <div className="text-red-500">URL de vidéo YouTube invalide</div>;
  }

  const handleImageClick = () => {
    setIsPlaying(true); // Met à jour l'état pour lancer la vidéo
  };

  return (
    <div className="relative px-5 max-w-4xl mx-auto w-full">
      <div className="w-full aspect-w-16 aspect-h-9">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay={isPlaying ? 1 : 0}`} // Ajout de autoplay
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
      {thumbnailImage && !isPlaying && ( // Affiche la miniature en overlay si elle existe et que la vidéo n'est pas en cours de lecture
        <img
          src={thumbnailImage}
          alt="Miniature personnalisée"
          className="absolute inset-0 w-full h-full object-cover cursor-pointer"
          onClick={handleImageClick} // Gestionnaire d'événements pour le clic
        />
      )}
    </div>
  );
};

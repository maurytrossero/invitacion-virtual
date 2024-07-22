import axios from 'axios';

const ACCESS_TOKEN = localStorage.getItem('instagram_access_token') || '';
const USER_ID = localStorage.getItem('instagram_user_id') || '';
const HASHTAG = 'oriypaulo';

console.log('Token de acceso desde localStorage:', ACCESS_TOKEN);
console.log('User ID desde localStorage:', USER_ID);

export const getInstagramImages = async () => {
  try {
    if (!ACCESS_TOKEN || !USER_ID) {
      throw new Error('Falta el token de acceso o el user_id');
    }

    const hashtagSearchUrl = `https://graph.facebook.com/v10.0/ig_hashtag_search?user_id=${USER_ID}&q=${encodeURIComponent(HASHTAG)}&access_token=${ACCESS_TOKEN}`;
    console.log('URL de búsqueda de hashtag:', hashtagSearchUrl);

    const hashtagResponse = await axios.get(hashtagSearchUrl);
    console.log('Respuesta de búsqueda de hashtag:', hashtagResponse.data);

    const hashtagId = hashtagResponse.data.data[0]?.id;
    console.log('ID del hashtag:', hashtagId);

    if (!hashtagId) {
      throw new Error('No se pudo obtener el ID del hashtag.');
    }

    const mediaUrl = `https://graph.facebook.com/v10.0/${hashtagId}/recent_media?user_id=${USER_ID}&fields=id,caption,media_type,media_url,thumbnail_url,permalink&access_token=${ACCESS_TOKEN}`;
    console.log('URL de medios recientes:', mediaUrl);

    const mediaResponse = await axios.get(mediaUrl);
    console.log('Respuesta de medios:', mediaResponse.data);

    return mediaResponse.data.data.map((media: any) => media.media_url);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error al obtener imágenes de Instagram:', error.response?.data || error.message);
    } else if (error instanceof Error) {
      console.error('Error al obtener imágenes de Instagram:', error.message);
    } else {
      console.error('Error al obtener imágenes de Instagram:', error);
    }
    return [];
  }
};

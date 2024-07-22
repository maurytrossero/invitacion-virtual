import axios, { AxiosError } from 'axios';

const ACCESS_TOKEN = '7d1b48aa7d90a01554736eae97823ed0'; // Reemplaza esto con tu token de acceso a largo plazo
const USER_ID = '1683614822429244'; // Reemplaza esto con tu user ID de Instagram
const HASHTAG = 'oriypaulo'; // Reemplaza esto con tu hashtag sin el símbolo #

export const getInstagramImages = async () => {
  try {
    // Endpoint de búsqueda de hashtags
    const hashtagSearchUrl = `https://graph.facebook.com/v10.0/ig_hashtag_search?user_id=${USER_ID}&q=${encodeURIComponent(HASHTAG)}&access_token=${ACCESS_TOKEN}`;
    
    // Primero obtenemos el ID del hashtag
    const hashtagResponse = await axios.get(hashtagSearchUrl);
    const hashtagId = hashtagResponse.data.data[0]?.id;
    
    if (!hashtagId) {
      throw new Error('No se pudo obtener el ID del hashtag.');
    }

    // Luego obtenemos los medios recientes asociados al hashtag
    const mediaUrl = `https://graph.facebook.com/v10.0/${hashtagId}/recent_media?user_id=${USER_ID}&fields=id,caption,media_type,media_url,thumbnail_url,permalink&access_token=${ACCESS_TOKEN}`;
    
    const mediaResponse = await axios.get(mediaUrl);
    return mediaResponse.data.data.map((media: any) => media.media_url);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Manejo específico para errores de Axios
      console.error('Error fetching Instagram images:', error.response?.data || error.message);
    } else if (error instanceof Error) {
      // Manejo para errores genéricos
      console.error('Error fetching Instagram images:', error.message);
    } else {
      // Manejo para otros casos no esperados
      console.error('Error fetching Instagram images:', error);
    }
    return [];
  }
};

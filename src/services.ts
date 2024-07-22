import axios from 'axios';

const ACCESS_TOKEN = localStorage.getItem('instagram_access_token') || '';
const USER_ID = localStorage.getItem('instagram_user_id') || '';  // Obtener el user_id desde localStorage
const HASHTAG = 'oriypaulo';

export const getInstagramImages = async () => {
  try {
    if (!ACCESS_TOKEN || !USER_ID) {
      throw new Error('Falta el token de acceso o el user_id');
    }

    const hashtagSearchUrl = `https://graph.facebook.com/v10.0/ig_hashtag_search?user_id=${USER_ID}&q=${encodeURIComponent(HASHTAG)}&access_token=${ACCESS_TOKEN}`;
    
    const hashtagResponse = await axios.get(hashtagSearchUrl);
    console.log('Respuesta de búsqueda de hashtag:', hashtagResponse.data);
    
    const hashtagId = hashtagResponse.data.data[0]?.id;
    
    if (!hashtagId) {
      throw new Error('No se pudo obtener el ID del hashtag.');
    }

    const mediaUrl = `https://graph.facebook.com/v10.0/${hashtagId}/recent_media?user_id=${USER_ID}&fields=id,caption,media_type,media_url,thumbnail_url,permalink&access_token=${ACCESS_TOKEN}`;
    
    const mediaResponse = await axios.get(mediaUrl);
    console.log('Respuesta de medios:', mediaResponse.data);
    
    return mediaResponse.data.data.map((media: any) => media.media_url);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error fetching Instagram images:', error.response?.data || error.message);
    } else if (error instanceof Error) {
      console.error('Error fetching Instagram images:', error.message);
    } else {
      console.error('Error fetching Instagram images:', error);
    }
    return [];
  }
};

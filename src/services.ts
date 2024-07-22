import axios from 'axios';

const ACCESS_TOKEN = localStorage.getItem('instagram_access_token') || ''; // Obtener el token de acceso desde el almacenamiento local
const USER_ID = '1246190323410382';
const HASHTAG = 'oriypaulo';

export const getInstagramImages = async () => {
  try {
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
    } else {
      console.error('Error fetching Instagram images:', error);
    }
    return [];
  }
};

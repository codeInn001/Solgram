import axios from 'axios';

const PINATA_API_KEY = '00149c4bfca24ff9e7d5';
const PINATA_SECRET_API_KEY = '24909779be64c658edeb6f44edfd43be45000f337176720c0b2a7732a03cf4a8';

// Function to upload file to IPFS
export async function uploadToIPFS(file) {
  const formData = new FormData();
  formData.append('file', file);

  const metadata = JSON.stringify({
    name: file.name,
  });

  formData.append('pinataMetadata', metadata);

  try {
    const response = await axios.post('https://api.pinata.cloud/pinning/pinFileToIPFS', formData, {
      maxContentLength: 'Infinity',
      headers: {
        'Content-Type': 'multipart/form-data',
        pinata_api_key: PINATA_API_KEY,
        pinata_secret_api_key: PINATA_SECRET_API_KEY,
      },
    });
    return `https://gateway.pinata.cloud/ipfs/${response.data.IpfsHash}`;
  } catch (error) {
    console.error('Error uploading file to IPFS:', error);
    throw error;
  }
}


// Function to upload metadata JSON to IPFS
export async function uploadMetadataToIPFS(description, imageURL, price) {
  const metadata = {
    
    description,
    image: imageURL,
    price
  };

  try {
    const response = await axios.post('https://api.pinata.cloud/pinning/pinJSONToIPFS', metadata, {
      headers: {
        pinata_api_key: PINATA_API_KEY,
        pinata_secret_api_key: PINATA_SECRET_API_KEY,
      },
    });
    return `https://gateway.pinata.cloud/ipfs/${response.data.IpfsHash}`;
  } catch (error) {
    console.error('Error uploading metadata to IPFS:', error);
    throw error;
  }
}


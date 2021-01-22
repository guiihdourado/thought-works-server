import axios from 'axios';

interface Request {
  name: string;
}

class CreateDynamicLinkService {
  public async execute({ name }: Request): Promise<string> {
    const response = await axios.post('https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=AIzaSyAo7KcKhB15E_J96Mzlh_D8Jusr0KC4kiE', {
      "dynamicLinkInfo": {
        "domainUriPrefix": "https://testthoughtworks.page.link",
        "link": `http://amagpieinthesky.com/${name}`,
        "androidInfo": {
          "androidPackageName": "com.mobilethoughtworks"
        },
      }
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    return response.data.shortLink;
  }
}

export default CreateDynamicLinkService;

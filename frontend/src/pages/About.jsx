import { Button, Result } from 'antd';
import useLanguage from '@/locale/useLanguage';

// Function to get the username from localStorage
const getUserName = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return user?.name || 'Your Name';
};

const About = () => {
  const translate = useLanguage();
  const userName = getUserName();

  const subject = encodeURIComponent('Regarding ERP Customization Support');
  const body = encodeURIComponent(
    `Dear Saurav Kumar,

I hope this message finds you well. This is a sample mail, do not consider it for official purpose

I am reaching out regarding the Millennium Energy Global Private Limited ERP system. I would like to discuss potential customizations or assistance you could provide.

Looking forward to your response.

Best regards,
${userName}`
  );

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=0501saurav@gmail.com&su=${subject}&body=${body}`;

  return (
    <Result
      status="info"
      title="Millennium Energy Global Private Limited"
      subTitle={translate('Do you need help on customize of this app')}
      extra={
        <>
          <p>
            Website:{' '}
            <a href="https://github.com/Astro-Saurav" target="_blank" rel="noopener noreferrer">
              Saurav Kumar
            </a>
          </p>
          <p>
            GitHub:{' '}
            <a href="https://github.com/Astro-Saurav/millennium-energy-erp" target="_blank" rel="noopener noreferrer">
            https://github.com/Astro-Saurav/millennium-energy-erp
            </a>
          </p>
          <Button
            type="primary"
            onClick={() => {
              window.open('https://github.com/Astro-Saurav', '_blank', 'noopener,noreferrer');
            }}
          >
            {translate('Contact us')}
          </Button>
          <Button
            type="primary"
            onClick={() => {
              window.open(gmailUrl, '_blank', 'noopener,noreferrer');
            }}
          >
            {translate('Email us')}
          </Button>
        </>
      }
    />
  );
};

export default About;

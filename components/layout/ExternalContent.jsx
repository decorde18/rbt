// components/ExternalContent.js
const ExternalContent = ({ url }) => {
  return (
    <iframe
      src={url}
      width='100%'
      // height='500px' // Adjust height as needed
      title='External Content'
      frameBorder='0'
      sandbox='allow-scripts allow-same-origin allow-popups allow-forms' // Customize sandbox attributes for security
    />
  );
};

export default ExternalContent;

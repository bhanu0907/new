// Function to update app configuration
const updateAppConfig = async (shopDomain, accessToken, enableAppEmbeds) => {
    const apiEndpoint = https://${shopDomain}/admin/api/202X-01/settings.json";
    const response = await fetch(apiEndpoint, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Access-Token': accessToken,
      },
      body: JSON.stringify({ settings: { enableAppEmbeds } }),
    });
    const data = await response.json();
    if (data.errors) {
      console.error('Failed to update app configuration:', data.errors);
    } else {
      console.log('App configuration updated successfully.');
    }
  };
  
  // Example of checking configuration in the injected script
  if (window.Shopify && window.Shopify.designMode) {
    const enableAppEmbeds = /* retrieve configuration from app settings */;
    if (enableAppEmbeds) {
      console.log('App embeds are enabled.');
    } else {
      console.log('App embeds are not enabled.');
    }
  }
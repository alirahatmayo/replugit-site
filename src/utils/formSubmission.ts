// Alternative form submission method using hidden iframe
// This is more reliable for Google Apps Script submissions

export const submitFormToGoogleScript = (formData: FormData, scriptUrl: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    // Create a hidden iframe
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.name = 'hidden_iframe';
    document.body.appendChild(iframe);
    
    // Create a form element
    const form = document.createElement('form');
    form.action = scriptUrl;
    form.method = 'POST';
    form.target = 'hidden_iframe';
    
    // Add form data as hidden inputs
    for (const [key, value] of formData.entries()) {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = value.toString();
      form.appendChild(input);
    }
    
    // Handle iframe load (success/failure)
    iframe.onload = () => {
      console.log('✅ Form submitted to Google Apps Script');
      document.body.removeChild(iframe);
      document.body.removeChild(form);
      resolve();
    };
    
    iframe.onerror = () => {
      document.body.removeChild(iframe);
      document.body.removeChild(form);
      reject(new Error('Failed to submit form'));
    };
    
    // Submit the form
    document.body.appendChild(form);
    form.submit();
    
    // Cleanup after timeout (backup)
    setTimeout(() => {
      if (document.body.contains(iframe)) {
        document.body.removeChild(iframe);
      }
      if (document.body.contains(form)) {
        document.body.removeChild(form);
      }
      resolve(); // Assume success after timeout
    }, 5000);
  });
};

// Simple XMLHttpRequest method (another alternative)
export const submitFormWithXHR = (formData: FormData, scriptUrl: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    
    xhr.open('POST', scriptUrl, true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200 || xhr.status === 0) { // 0 for no-cors
          console.log('✅ XHR submission successful');
          resolve();
        } else {
          console.error('❌ XHR submission failed:', xhr.status);
          reject(new Error(`HTTP ${xhr.status}`));
        }
      }
    };
    
    // Convert FormData to URL-encoded string
    const urlEncodedData = new URLSearchParams(formData as any).toString();
    xhr.send(urlEncodedData);
  });
};

# Troubleshooting: Contact Form Not Sending Emails

## ✅ Quick Checklist

1. **✅ Form URLs Updated**: Both contact and partner forms now point to your Google Apps Script
2. **❓ Google Apps Script Deployed**: Need to verify this
3. **❓ Permissions Granted**: Need to check Apps Script permissions
4. **❓ Script is Working**: Need to test the script

## 🔧 Step-by-Step Debugging

### Step 1: Verify Google Apps Script Deployment

1. Go to [script.google.com](https://script.google.com)
2. Open your "ReplugIT Contact Form Handler" project
3. Click on "Deploy" → "Manage deployments"
4. Verify you have an active deployment with:
   - **Type**: Web app
   - **Execute as**: Me (your email)
   - **Who has access**: Anyone
   - **Status**: Active

### Step 2: Test the Google Apps Script Directly

1. In your Google Apps Script project, click on the "testContactForm" function
2. Click the "Run" button (▶️)
3. If prompted, **authorize the script** (this is crucial!)
4. Check if you receive a test email at hello@replugit.com

### Step 3: Check Browser Developer Tools

1. Open your website in Chrome/Firefox
2. Press F12 to open Developer Tools
3. Go to the "Console" tab
4. Try submitting the form
5. Look for any error messages in red

### Step 4: Check Network Requests

1. In Developer Tools, go to the "Network" tab
2. Submit the form
3. Look for a request to your Google Apps Script URL
4. Check if it shows:
   - **Status**: 200 (success) or error code
   - **Response**: Success/error message

## 🚨 Common Issues & Solutions

### Issue 1: "Authorization Required" Error

**Symptom**: Form submits but no email received
**Solution**:

1. Go to your Google Apps Script
2. Run the test function manually
3. Grant all requested permissions when prompted

### Issue 2: CORS/Cross-Origin Error

**Symptom**: Console shows CORS error
**Solution**:

1. Verify deployment is set to "Anyone" can access
2. Make sure you're using the correct /exec URL (not /dev)

### Issue 3: Form Data Not Reaching Script

**Symptom**: Script runs but receives empty data
**Solution**: Check form field names match the script expectations

### Issue 4: Gmail Spam Filter

**Symptom**: Script runs successfully but no email in inbox
**Solution**:

1. Check Gmail Spam folder
2. Check Gmail "All Mail" folder
3. Search for "ReplugIT" in Gmail

## 🧪 Manual Testing Steps

### Test 1: Direct Script Test

```javascript
// Add this to your Google Apps Script and run it
function manualTest() {
  const testData = {
    parameter: {
      formType: "contact",
      firstName: "Test",
      lastName: "User",
      email: "test@example.com",
      phone: "555-0123",
      inquiryType: "general",
      message: "This is a manual test from Google Apps Script",
    },
  };

  const result = doPost(testData);
  console.log("Test result:", result.getContent());
}
```

### Test 2: Check Script Logs

1. In Google Apps Script, go to "Executions" tab
2. Look for recent executions
3. Click on any execution to see logs and errors

### Test 3: Simplified Form Test

Create a simple HTML file to test the form directly:

```html
<!DOCTYPE html>
<html>
  <body>
    <form
      action="https://script.google.com/macros/s/AKfycbwqdUSxeGmj8OV3mWej0wN2sbQRZG7HqHGSKdgre9m8nPiVymx_Nnh0e-h07O4zM4r9/exec"
      method="POST"
    >
      <input type="text" name="firstName" value="John" required /><br />
      <input type="text" name="lastName" value="Doe" required /><br />
      <input
        type="email"
        name="email"
        value="john@example.com"
        required
      /><br />
      <input type="text" name="phone" value="555-0123" /><br />
      <select name="inquiryType" required>
        <option value="general">General Inquiry</option></select
      ><br />
      <textarea name="message" required>Test message</textarea><br />
      <input type="hidden" name="formType" value="contact" />
      <button type="submit">Test Submit</button>
    </form>
  </body>
</html>
```

## 🔍 What to Check Right Now

1. **Go to your Google Apps Script** and run the test function
2. **Check the "Executions" tab** for any error messages
3. **Verify the deployment URL** matches what's in your form
4. **Check your Gmail** (including spam folder)
5. **Test with browser dev tools open** to see network requests

## 📞 Quick Debug Commands

Add these console.log statements to your form's onSubmit:

```javascript
onSubmit={(e) => {
  e.preventDefault();
  const form = e.target as HTMLFormElement;
  const formData = new FormData(form);

  console.log('Form action:', form.action);
  console.log('Form data:', Object.fromEntries(formData));

  fetch(form.action, {
    method: 'POST',
    body: formData,
  })
  .then(response => {
    console.log('Response status:', response.status);
    return response.text();
  })
  .then(data => {
    console.log('Response data:', data);
    window.location.href = '/thank-you';
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}}
```

Let me know what you find when you check these items! 🕵️‍♂️

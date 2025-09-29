l# Google Apps Script Setup for Contact Forms

## Step 1: Create Google Apps Script

1. Go to [script.google.com](https://script.google.com)
2. Click "New Project"
3. Replace the default code with the script below
4. Save the project with a name like "ReplugIT Contact Form Handler"

## Step 2: Google Apps Script Code

```javascript
function doPost(e) {
  try {
    // Get form data
    const formData = e.parameter;

    // Your Gmail address where you want to receive emails
    const RECIPIENT_EMAIL = "hello@replugit.com";

    // Determine form type
    const formType = formData.formType || "contact";

    let subject, htmlBody;

    if (formType === "contact") {
      subject = "New Contact Form Submission - ReplugIT";
      htmlBody = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #10B981; border-bottom: 2px solid #10B981; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${formData.firstName} ${
        formData.lastName
      }</p>
            <p><strong>Email:</strong> <a href="mailto:${formData.email}">${
        formData.email
      }</a></p>
            <p><strong>Phone:</strong> ${formData.phone || "Not provided"}</p>
            <p><strong>Inquiry Type:</strong> ${formData.inquiryType}</p>
          </div>
          
          <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Message</h3>
            <p style="white-space: pre-wrap;">${formData.message}</p>
          </div>
          
          <div style="background-color: #f3f4f6; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; font-size: 12px; color: #6b7280;">
              <strong>Submitted:</strong> ${new Date().toLocaleString()}
            </p>
          </div>
        </div>
      `;
    } else if (formType === "partner") {
      subject = "New Partner Application - ReplugIT";
      htmlBody = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #10B981; border-bottom: 2px solid #10B981; padding-bottom: 10px;">
            New Partner Application
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Company Information</h3>
            <p><strong>Company Name:</strong> ${formData.companyName}</p>
            <p><strong>Contact Person:</strong> ${formData.contactPerson}</p>
            <p><strong>Email:</strong> <a href="mailto:${formData.email}">${
        formData.email
      }</a></p>
            <p><strong>Phone:</strong> ${formData.phone}</p>
            <p><strong>Website:</strong> ${
              formData.website || "Not provided"
            }</p>
            <p><strong>Business Type:</strong> ${formData.businessType}</p>
          </div>
          
          <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Partnership Goals</h3>
            <p style="white-space: pre-wrap;">${formData.message}</p>
          </div>
          
          <div style="background-color: #f3f4f6; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; font-size: 12px; color: #6b7280;">
              <strong>Submitted:</strong> ${new Date().toLocaleString()}
            </p>
          </div>
        </div>
      `;
    }

    // Send email
    GmailApp.sendEmail(
      RECIPIENT_EMAIL,
      subject,
      "", // Plain text body (empty since we're using HTML)
      {
        htmlBody: htmlBody,
        replyTo: formData.email,
      }
    );

    // Log the submission
    console.log("Form submitted successfully:", formData);

    // Return success response
    return ContentService.createTextOutput(
      JSON.stringify({
        status: "success",
        message: "Form submitted successfully",
      })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    console.error("Error processing form:", error);

    return ContentService.createTextOutput(
      JSON.stringify({
        status: "error",
        message: "Error processing form",
      })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

// Test function for development
function testContactForm() {
  const testData = {
    parameter: {
      formType: "contact",
      firstName: "John",
      lastName: "Doe",
      email: "john@example.com",
      phone: "555-0123",
      inquiryType: "general",
      message: "This is a test message",
    },
  };

  doPost(testData);
}
```

## Step 3: Deploy the Script

1. Click the "Deploy" button in the toolbar
2. Choose "New deployment"
3. For "Type", select "Web app"
4. Set "Execute as" to "Me"
5. Set "Who has access" to "Anyone"
6. Click "Deploy"
7. **Copy the Web app URL** - you'll need this for your form action

## Step 4: Update Your Website

Replace `YOUR_GOOGLE_APPS_SCRIPT_ID` within your ContactPartnerSection.tsx with the actual Web app URL you got from Step 3.

The URL will look like:
`https://script.google.com/macros/s/AKfycbwqdUSxeGmj8OV3mWej0wN2sbQRZG7HqHGSKdgre9m8nPiVymx_Nnh0e-h07O4zM4r9/exec`

## Step 5: Test Your Forms

1. Submit a test form from your website
2. Check your Gmail for the formatted email
3. Check the Google Apps Script logs for any errors

## Benefits of This Approach

✅ **Integrated with Google Workspace**: Works seamlessly with your Gmail
✅ **Professional Emails**: Beautifully formatted HTML emails
✅ **Free**: No cost, uses your existing Google account
✅ **Reliable**: Google's infrastructure handles delivery
✅ **Custom Styling**: Your forms keep their beautiful design
✅ **Reply-To**: Emails have reply-to set to the sender's address
✅ **Logging**: All submissions are logged for debugging

## Optional: Create a Google Sheet to Store Submissions

If you want to store form submissions in a Google Sheet:

1. Create a new Google Sheet
2. Add this code to your Apps Script (after the email sending part):

```javascript
// Optional: Save to Google Sheet
const SHEET_ID = "YOUR_GOOGLE_SHEET_ID"; // Replace with your sheet ID
const sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();

// Add headers if first row is empty
if (sheet.getLastRow() === 0) {
  if (formType === "contact") {
    sheet
      .getRange(1, 1, 1, 7)
      .setValues([
        [
          "Timestamp",
          "First Name",
          "Last Name",
          "Email",
          "Phone",
          "Inquiry Type",
          "Message",
        ],
      ]);
  } else {
    sheet
      .getRange(1, 1, 1, 8)
      .setValues([
        [
          "Timestamp",
          "Company",
          "Contact Person",
          "Email",
          "Phone",
          "Website",
          "Business Type",
          "Message",
        ],
      ]);
  }
}

// Add the form data
if (formType === "contact") {
  sheet.appendRow([
    new Date(),
    formData.firstName,
    formData.lastName,
    formData.email,
    formData.phone,
    formData.inquiryType,
    formData.message,
  ]);
} else {
  sheet.appendRow([
    new Date(),
    formData.companyName,
    formData.contactPerson,
    formData.email,
    formData.phone,
    formData.website,
    formData.businessType,
    formData.message,
  ]);
}
```

## Troubleshooting

- **401 Unauthorized**: Make sure deployment is set to "Anyone" can access
- **No emails received**: Check Gmail spam folder and Apps Script logs
- **CORS errors**: The fetch request should work fine with Google Apps Script
- **Form not submitting**: Check browser console for errors

Your forms are now ready to work with Google Workspace! 🎉

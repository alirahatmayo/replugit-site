// Enhanced test function with better debugging
function enhancedEmailTest() {
  try {
    const RECIPIENT_EMAIL = "hello@replugit.com";
    
    console.log("Attempting to send email to:", RECIPIENT_EMAIL);
    console.log("Current user email:", Session.getActiveUser().getEmail());
    
    // Send a very simple email
    GmailApp.sendEmail(
      RECIPIENT_EMAIL,
      "🔧 DEBUG: Email Test from Google Apps Script",
      "This is a plain text test email.\n\nIf you receive this, the email system is working!\n\nSent at: " + new Date().toString(),
      {
        name: "ReplugIT Contact System"
      }
    );
    
    console.log("Email sent successfully!");
    console.log("Check the following locations:");
    console.log("1. Gmail Inbox");
    console.log("2. Gmail Spam folder");
    console.log("3. All Mail folder");
    console.log("4. Search for 'DEBUG' in Gmail");
    
  } catch (error) {
    console.error("Error sending email:", error);
    console.error("Error details:", error.toString());
  }
}

// Test with your own email address
function testWithMyEmail() {
  try {
    const myEmail = Session.getActiveUser().getEmail();
    console.log("Sending test email to your account:", myEmail);
    
    GmailApp.sendEmail(
      myEmail,
      "✅ Self-Test: Google Apps Script Email",
      "This email was sent to your own account to verify the email system works.\n\nIf you receive this, emails are working and the issue might be with the recipient address.\n\nSent at: " + new Date().toString()
    );
    
    console.log("Self-test email sent to:", myEmail);
    
  } catch (error) {
    console.error("Error in self-test:", error);
  }
}

// Check Gmail quota and limits
function checkEmailLimits() {
  try {
    const quota = DriveApp.getStorageUsed();
    console.log("Drive storage used:", quota);
    console.log("Current user:", Session.getActiveUser().getEmail());
    console.log("Script timezone:", Session.getScriptTimeZone());
    console.log("Current time:", new Date().toString());
    
    // Check if we can access Gmail
    const drafts = GmailApp.getDrafts();
    console.log("Gmail access working. Draft count:", drafts.length);
    
  } catch (error) {
    console.error("Error checking limits:", error);
  }
}

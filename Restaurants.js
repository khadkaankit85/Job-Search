const nodemailer = require('nodemailer');

// Create a transporter
const transporter = nodemailer.createTransport({
    service: 'your_email_service_provider',
    auth: {
        user: 'your_email',
        pass: 'your_password',
    },
});

// Function to send email to multiple recipients
async function sendEmails(recipients, subject, message) {
    try {
        // Loop through each recipient
        for (const recipient of recipients) {
            // Create the email options
            const mailOptions = {
                from: 'your_email',
                to: recipient,
                subject: subject,
                text: message,
            };

            // Send the email
            await transporter.sendMail(mailOptions);
            console.log(`Email sent to ${recipient}`);
        }
    } catch (error) {
        console.error('Error sending email:', error);
    }
}

// Example usage
const recipients = ['recipient1@example.com', 'recipient2@example.com', 'recipient3@example.com'];
const subject = 'Job Application';
const message = 'Dear Hiring Manager, ...'; // Your cover letter content

sendEmails(recipients, subject, message);
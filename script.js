console.log('hi')
window.addEventListener('df-response-received', (event) => {
// Loop through all the messages
event.detail.data.messages.forEach(message => {
    // Check if the message has citations
    if (message.citations && Array.isArray(message.citations)) {
    // Loop through each citation
    message.citations.forEach(citation => {
        // Update the actionLink to be based on the title
        citation.actionLink = `https://portal.variantperception.com/providers/vp-research/research/${encodeURIComponent(citation.title)}`;
    });
    }
});

// Log the updated messages (optional, for debugging purposes)
console.log('Updated messages:', event.detail.data.messages);
});
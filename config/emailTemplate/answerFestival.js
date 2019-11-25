module.exports = (answer) => {
    return `
        <html>
            <body>
                <div style="text-align: center">
                    <h3>I'd like your input!</h3>
                    <p>Please answer the following question:</p>
                    <h3>${answer.title}</h3>
                    <p>${answer.body}</p>
                </div>
            </body>
        </html>
    `;
}
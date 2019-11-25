module.exports = (answer) => {
    return `
        <html>
            <body>
                <div style="text-align: center">
                    <h3>Obrigado por nos enviar sua proposta de festival ${answer.name}</h3>
                    <p>Assim que analisarmos a proposta entraremos em contato o mais breve possível.</p>
                    <p>att, </p>
                    <p>Equipe climb festival</p>
                </div>
            </body>
        </html>
    `;
}
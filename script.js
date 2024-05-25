function generateSignature() {
    // Get user input
    const name = document.getElementById('name').value;
    const designation = document.getElementById('designation').value;

    // HTML signature template
    const signatureTemplate = `
        <div>
            <p style="font-size:11pt;font-family:Calibri,sans-serif;margin:0;"><b><span
                style="color:#64777D;font-size:10pt;padding:0;border:1pt none windowtext;">Thanks & Regards,
                </span></b>
            </p>
            <div class="R1UVb" style="height: 195px; width: 100%;" has-hovered="true">
                <div class="qF8_5"></div>
                <table border="0" cellspacing="6" cellpadding="0"
                    style="background-color: white; width: 510pt; transform: scale(0.779412, 0.779412); transform-origin: left top;"
                    min-scale="0.7794117647058824">
                    <tbody>
                        <tr>
                            <td style="width:100%;padding:0;">
                                <table border="0" cellspacing="0" cellpadding="0" style="width:100%;">
                                    <tbody>
                                        <tr>
                                            <td
                                                style="width:50%;padding:0 0 7.5pt 0;border-style:none none solid none;border-bottom-width:1.5pt;border-bottom-color:#F9A30A;">
                                                <table border="0" cellspacing="0" cellpadding="0">
                                                    <tbody>
                                                        <tr>
                                                            <td style="padding:0;">
                                                                <p
                                                                    style="font-size:11pt;font-family:Calibri,sans-serif;margin:0;">
                                                                    <b><span
                                                                        style="color:#F59D00;font-size:13.5pt;text-transform:uppercase;">${name}</span></b>
                                                                </p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style="padding:0;">
                                                                <p
                                                                    style="font-size:11pt;font-family:Calibri,sans-serif;margin:0;">
                                                                    <span
                                                                        style="color:#64777D;font-size:10pt;text-transform:uppercase;">${designation}
                                                                    <span
                                                                        style="padding:0;border:1pt none windowtext;">
                                                                    </span></span><span></span>
                                                                </p>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                            <td valign="bottom"
                                                style="width:23%;padding:0 0 7.5pt 0;border-style:none none solid none;border-bottom-width:1.5pt;border-bottom-color:#F9A30A;">
                                                <div align="right">
                                                    <table border="0" cellspacing="0" cellpadding="0">
                                                        <tbody>
                                                            <tr>
                                                                <td valign="bottom" style="padding:0;">
                                                                    <p
                                                                        style="font-size:11pt;font-family:Calibri,sans-serif;margin:0;">
                                                                        <a href="https://www.facebook.com/RezLive/"
                                                                           target="_blank" rel="noopener noreferrer"
                                                                           data-auth="NotApplicable" data-linkindex="0" style="text-decoration:none;"><span
                                                                           style="color:windowtext;text-decoration:none;">
                                                                        <img src="https://rezdesk.s3.eu-west-1.amazonaws.com/storage/signatures/kpJeBf0VR5igbTsUlZ2tChK0HtF1pQzHKVUehEOy.png" alt="Skype">
                                                                        </span></a><b>
                                                                        <span
                                                                           style="color:#F59D00;font-size:7.5pt;text-transform:uppercase;padding:0;border:1pt none windowtext;">&nbsp;</span></b><a
                                                                           href="https://www.linkedin.com/showcase/rezlive/"
                                                                           target="_blank" rel="noopener noreferrer"
                                                                           data-auth="NotApplicable" data-linkindex="1" style="text-decoration:none;"><span
                                                                           style="color:windowtext;text-decoration:none;">
                                                                        <img src="https://rezdesk.s3.eu-west-1.amazonaws.com/storage/signatures/tYuGxHrxYIvq9Aj4oGh38Q0lPa5XdA57lNBevE63.png">   
                                                                        </span></a><b><span
                                                                           style="color:#F59D00;font-size:7.5pt;text-transform:uppercase;padding:0;border:1pt none windowtext;">&nbsp;</span></b><a
                                                                           href="https://twitter.com/b2brezlive"
                                                                           target="_blank" rel="noopener noreferrer"
                                                                           data-auth="NotApplicable" data-linkindex="2" style="text-decoration:none;"><span
                                                                           style="color:windowtext;text-decoration:none;">
                                                                        <img src="https://rezdesk.s3.eu-west-1.amazonaws.com/storage/signatures/qWe58G2Sf5ATS7u1CkYTUH6GWOdUq38ebjIGmpS6.png" alt="twitter">
                                                                        </span></a><b><span
                                                                           style="color:#F59D00;font-size:7.5pt;text-transform:uppercase;padding:0;border:1pt none windowtext;">&nbsp;</span></b><a
                                                                           href="http://www.youtube.com/rezlive"
                                                                           target="_blank" rel="noopener noreferrer"
                                                                           data-auth="NotApplicable" data-linkindex="3" style="text-decoration:none;"><span
                                                                           style="color:windowtext;text-decoration:none;">
                                                                        <img src="https://rezdesk.s3.eu-west-1.amazonaws.com/storage/signatures/j5ViCtN18KL8H5c1j3rznreFSgtdAWH7ACEzkNlw.png" alt="Youtube">    
                                                                        </span></a><span></span>
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </td>
                                            <td style="width:23%;padding:0;">
                                                <p align="right"
                                                   style="font-size:11pt;font-family:Calibri,sans-serif;text-align:right;margin:0;">
                                                   <a href="http://www.rezlive.com/" target="_blank" rel="noopener noreferrer"
                                                      data-auth="NotApplicable" data-linkindex="4"><span
                                                      style="color:windowtext;text-decoration:none;">
                                                   <img src="https://rezdesk.s3.eu-west-1.amazonaws.com/storage/signatures/7DH9W4UOvsOL13OXNQhtgFxwrGYBnJSlKKXsJiln.png" alt="New">
                                                   </span></a><span></span>
                                                </p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    `;

    // Display the generated signature
    document.getElementById('signature').innerHTML = signatureTemplate;
}

function downloadSignature() {
    const name = document.getElementById('name').value;
    const designation = document.getElementById('designation').value;

    const signatureTemplate = `
        <div>
            <p style="font-size:11pt;font-family:Calibri,sans-serif;margin:0;"><b><span
                style="color:#64777D;font-size:10pt;padding:0;border:1pt none windowtext;">Thanks & Regards,
                </span></b>
            </p>
            <div class="R1UVb" style="height: 195px; width: 100%;" has-hovered="true">
                <div class="qF8_5"></div>
                <table border="0" cellspacing="6" cellpadding="0"
                    style="background-color: white; width: 510pt; transform: scale(0.779412, 0.779412); transform-origin: left top;"
                    min-scale="0.7794117647058824">
                    <tbody>
                        <tr>
                            <td style="width:100%;padding:0;">
                                <table border="0" cellspacing="0" cellpadding="0" style="width:100%;">
                                    <tbody>
                                        <tr>
                                            <td
                                                style="width:50%;padding:0 0 7.5pt 0;border-style:none none solid none;border-bottom-width:1.5pt;border-bottom-color:#F9A30A;">
                                                <table border="0" cellspacing="0" cellpadding="0">
                                                    <tbody>
                                                        <tr>
                                                            <td style="padding:0;">
                                                                <p
                                                                    style="font-size:11pt;font-family:Calibri,sans-serif;margin:0;">
                                                                    <b><span
                                                                        style="color:#F59D00;font-size:13.5pt;text-transform:uppercase;">${name}</span></b>
                                                                </p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style="padding:0;">
                                                                <p
                                                                    style="font-size:11pt;font-family:Calibri,sans-serif;margin:0;">
                                                                    <span
                                                                        style="color:#64777D;font-size:10pt;text-transform:uppercase;">${designation}
                                                                    <span
                                                                        style="padding:0;border:1pt none windowtext;">
                                                                    </span></span><span></span>
                                                                </p>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                            <td valign="bottom"
                                                style="width:23%;padding:0 0 7.5pt 0;border-style:none none solid none;border-bottom-width:1.5pt;border-bottom-color:#F9A30A;">
                                                <div align="right">
                                                    <table border="0" cellspacing="0" cellpadding="0">
                                                        <tbody>
                                                            <tr>
                                                                <td valign="bottom" style="padding:0;">
                                                                    <p
                                                                        style="font-size:11pt;font-family:Calibri,sans-serif;margin:0;">
                                                                        <a href="https://www.facebook.com/RezLive/"
                                                                           target="_blank" rel="noopener noreferrer"
                                                                           data-auth="NotApplicable" data-linkindex="0" style="text-decoration:none;"><span
                                                                           style="color:windowtext;text-decoration:none;">
                                                                        <img src="https://rezdesk.s3.eu-west-1.amazonaws.com/storage/signatures/kpJeBf0VR5igbTsUlZ2tChK0HtF1pQzHKVUehEOy.png" alt="Skype">
                                                                        </span></a><b>
                                                                        <span
                                                                           style="color:#F59D00;font-size:7.5pt;text-transform:uppercase;padding:0;border:1pt none windowtext;">&nbsp;</span></b><a
                                                                           href="https://www.linkedin.com/showcase/rezlive/"
                                                                           target="_blank" rel="noopener noreferrer"
                                                                           data-auth="NotApplicable" data-linkindex="1" style="text-decoration:none;"><span
                                                                           style="color:windowtext;text-decoration:none;">
                                                                        <img src="https://rezdesk.s3.eu-west-1.amazonaws.com/storage/signatures/tYuGxHrxYIvq9Aj4oGh38Q0lPa5XdA57lNBevE63.png">   
                                                                        </span></a><b><span
                                                                           style="color:#F59D00;font-size:7.5pt;text-transform:uppercase;padding:0;border:1pt none windowtext;">&nbsp;</span></b><a
                                                                           href="https://twitter.com/b2brezlive"
                                                                           target="_blank" rel="noopener noreferrer"
                                                                           data-auth="NotApplicable" data-linkindex="2" style="text-decoration:none;"><span
                                                                           style="color:windowtext;text-decoration:none;">
                                                                        <img src="https://rezdesk.s3.eu-west-1.amazonaws.com/storage/signatures/qWe58G2Sf5ATS7u1CkYTUH6GWOdUq38ebjIGmpS6.png" alt="twitter">
                                                                        </span></a><b><span
                                                                           style="color:#F59D00;font-size:7.5pt;text-transform:uppercase;padding:0;border:1pt none windowtext;">&nbsp;</span></b><a
                                                                           href="http://www.youtube.com/rezlive"
                                                                           target="_blank" rel="noopener noreferrer"
                                                                           data-auth="NotApplicable" data-linkindex="3" style="text-decoration:none;"><span
                                                                           style="color:windowtext;text-decoration:none;">
                                                                        <img src="https://rezdesk.s3.eu-west-1.amazonaws.com/storage/signatures/j5ViCtN18KL8H5c1j3rznreFSgtdAWH7ACEzkNlw.png" alt="Youtube">    
                                                                        </span></a><span></span>
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </td>
                                            <td style="width:23%;padding:0;">
                                                <p align="right"
                                                   style="font-size:11pt;font-family:Calibri,sans-serif;text-align:right;margin:0;">
                                                   <a href="http://www.rezlive.com/" target="_blank" rel="noopener noreferrer"
                                                      data-auth="NotApplicable" data-linkindex="4"><span
                                                      style="color:windowtext;text-decoration:none;">
                                                   <img src="https://rezdesk.s3.eu-west-1.amazonaws.com/storage/signatures/7DH9W4UOvsOL13OXNQhtgFxwrGYBnJSlKKXsJiln.png" alt="New">
                                                   </span></a><span></span>
                                                </p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    `;

    // Create a blob from the signature template
    const blob = new Blob([signatureTemplate], { type: 'text/html' });

    // Create a link element
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'signature.html';

    // Append the link to the body
    document.body.appendChild(link);

    // Programmatically click the link to trigger the download
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);
}

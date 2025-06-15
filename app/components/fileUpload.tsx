'use client'
import { Upload } from "lucide-react";
import * as React from "react";

const FileUpload: React.FC = () => {
    const [isUploading, setIsUploading] = React.useState(false);
    const [uploadComplete, setUploadComplete] = React.useState(false);

    const handleFileUpload = () => {
        const el = document.createElement('input');
        el.setAttribute('type', 'file');
        el.setAttribute('accept', 'application/pdf');
        el.addEventListener('change', async () => {
            if(el.files && el.files.length > 0) {
                const file = el.files.item(0);
                if (file) {
                    const formData = new FormData();
                    formData.append('pdf', file);

                    setIsUploading(true);
                    try {
                        await fetch('https://5509-2401-4900-1cba-6ede-2dac-512d-597f-722e.ngrok-free.app/upload/pdf', {
                            method: 'POST',
                            body: formData
                        });
                        setUploadComplete(true);
                        setTimeout(() => setUploadComplete(false), 3000);
                    } catch (error) {
                        console.error("Upload failed", error);
                    } finally {
                        setIsUploading(false);
                    }
                }
                
            }
        });
        el.click();
    }

    return(
        <div>
            <div className="bg-slate-900 text-white shadow-2xl flex justify-center items-center p-4 rounded-lg border-white border-1">
                <div onClick={handleFileUpload} className="flex justify-center items-center flex-col cursor-pointer">
                    <h3>Upload your PDF file</h3>
                    <Upload />
                </div>
            </div>
            <div className="mt-4 flex items-center justify-center">
                {isUploading && (
                    <div className="text-yellow-400 animate-pulse">Uploading...</div>
                )}
                {uploadComplete && !isUploading && (
                    <div className="text-green-400 transition-opacity duration-300">
                        Upload complete
                    </div>
                )}
            </div>
        </div>
    )
}

export default FileUpload;

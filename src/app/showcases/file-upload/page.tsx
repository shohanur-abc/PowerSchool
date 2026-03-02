'use client';

import { FileUpload } from '@/components/molecules/file-upload';

export default function FileUploadPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Default File Upload</h2>
                <div className="max-w-lg">
                    <FileUpload onFilesChange={(files) => console.log(files)} />
                </div>
            </div>

            <div>
                <h2 className="text-lg font-semibold mb-4">Multiple Files</h2>
                <div className="max-w-lg">
                    <FileUpload
                        multiple
                        onFilesChange={(files) => console.log(files)}
                    />
                </div>
            </div>

            <div>
                <h2 className="text-lg font-semibold mb-4">Images Only</h2>
                <div className="max-w-lg">
                    <FileUpload
                        accept="image/*"
                        onFilesChange={(files) => console.log(files)}
                    />
                </div>
            </div>

            <div>
                <h2 className="text-lg font-semibold mb-4">PDF Only with Size Limit (5MB)</h2>
                <div className="max-w-lg">
                    <FileUpload
                        accept=".pdf"
                        maxSize={5 * 1024 * 1024}
                        onFilesChange={(files) => console.log(files)}
                    />
                </div>
            </div>

            <div>
                <h2 className="text-lg font-semibold mb-4">Compact Variant</h2>
                <div className="max-w-lg">
                    <FileUpload
                        variant="minimal"
                        multiple
                        onFilesChange={(files) => console.log(files)}
                    />
                </div>
            </div>

            <div>
                <h2 className="text-lg font-semibold mb-4">Documents Multiple (10MB Limit)</h2>
                <div className="max-w-lg">
                    <FileUpload
                        accept=".pdf,.doc,.docx,.xlsx"
                        multiple
                        maxSize={10 * 1024 * 1024}
                        onFilesChange={(files) => console.log('Files:', files.map(f => f.name))}
                    />
                </div>
            </div>
        </div>
    );
}

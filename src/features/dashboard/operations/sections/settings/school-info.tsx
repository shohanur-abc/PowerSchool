'use client';

import { useState } from 'react';
import { ImagePlus, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

// ============= MAIN COMPONENT =============
export default function SchoolInfo({
    title,
    description,
    defaultValues,
    onSubmit,
    isSubmitting,
}: ISchoolInfo) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                {description && (
                    <CardDescription>{description}</CardDescription>
                )}
            </CardHeader>
            <SchoolInfoForm
                defaultValues={defaultValues}
                onSubmit={onSubmit}
                isSubmitting={isSubmitting}
            />
        </Card>
    );
}

// ============= CHILD COMPONENTS =============
const SchoolInfoForm = ({
    defaultValues,
    onSubmit,
    isSubmitting,
}: {
    defaultValues?: Partial<ISchoolInfoPayload>;
    onSubmit?: (data: ISchoolInfoPayload) => void;
    isSubmitting?: boolean;
}) => {
    const [name, setName] = useState(defaultValues?.name ?? '');
    const [address, setAddress] = useState(defaultValues?.address ?? '');
    const [phone, setPhone] = useState(defaultValues?.phone ?? '');
    const [email, setEmail] = useState(defaultValues?.email ?? '');
    const [website, setWebsite] = useState(defaultValues?.website ?? '');
    const [logoPreview, setLogoPreview] = useState(
        defaultValues?.logoUrl ?? ''
    );

    // TODO: Add form validation with zod + react-hook-form
    const isValid = name.trim() && phone.trim() && email.trim();

    const handleSubmit = () => {
        if (!isValid) return;
        onSubmit?.({
            name: name.trim(),
            address: address.trim(),
            phone: phone.trim(),
            email: email.trim(),
            website: website.trim() || undefined,
            logoUrl: logoPreview || undefined,
        });
    };

    return (
        <>
            <CardContent className="space-y-4">
                {/* Logo Upload */}
                <LogoUpload
                    preview={logoPreview}
                    onPreviewChange={setLogoPreview}
                />

                {/* School Name */}
                <div className="space-y-2">
                    <Label htmlFor="school-name">School Name</Label>
                    <Input
                        id="school-name"
                        placeholder="e.g., Springfield International School"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                {/* Address */}
                <div className="space-y-2">
                    <Label htmlFor="school-address">Address</Label>
                    <Textarea
                        id="school-address"
                        placeholder="Full school address..."
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        rows={3}
                    />
                </div>

                {/* Phone & Email */}
                <div className="@container grid grid-cols-1 @sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="school-phone">Phone</Label>
                        <Input
                            id="school-phone"
                            type="tel"
                            placeholder="+1 (555) 000-0000"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="school-email">Email</Label>
                        <Input
                            id="school-email"
                            type="email"
                            placeholder="admin@school.edu"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </div>

                {/* Website */}
                <div className="space-y-2">
                    <Label htmlFor="school-website">
                        Website{' '}
                        <span className="text-muted-foreground">(optional)</span>
                    </Label>
                    <Input
                        id="school-website"
                        type="url"
                        placeholder="https://school.edu"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                    />
                </div>
            </CardContent>
            <CardFooter className="justify-end gap-2 border-t pt-6">
                <Button
                    onClick={handleSubmit}
                    disabled={!isValid || isSubmitting}
                >
                    {isSubmitting && (
                        <Loader2 className="size-4 mr-2 animate-spin" />
                    )}
                    Save Changes
                </Button>
            </CardFooter>
        </>
    );
};

const LogoUpload = ({
    preview,
    onPreviewChange,
}: {
    preview: string;
    onPreviewChange: (url: string) => void;
}) => (
    <div className="space-y-2">
        <Label>School Logo</Label>
        <div className="flex items-center gap-4">
            <div className="size-20 rounded-lg border-2 border-dashed flex items-center justify-center bg-muted/50 overflow-hidden shrink-0">
                {preview ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                        src={preview}
                        alt="School logo"
                        className="size-full object-cover rounded-lg"
                    />
                ) : (
                    <ImagePlus className="size-6 text-muted-foreground" />
                )}
            </div>
            <div className="space-y-1">
                <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => {
                        // TODO: Implement file upload handler
                        onPreviewChange('');
                    }}
                >
                    Upload Logo
                </Button>
                <p className="text-xs text-muted-foreground">
                    PNG, JPG or SVG. Max 2MB.
                </p>
            </div>
        </div>
    </div>
);

// TODO: Implement actual file upload with presigned URL
// TODO: Add form reset / discard changes button
// TODO: Add school code / affiliation number fields

// ============= TYPES =============
interface ISchoolInfoPayload {
    name: string;
    address: string;
    phone: string;
    email: string;
    website?: string;
    logoUrl?: string;
}

interface ISchoolInfo {
    title: string;
    description?: string;
    defaultValues?: Partial<ISchoolInfoPayload>;
    onSubmit?: (data: ISchoolInfoPayload) => void;
    isSubmitting?: boolean;
}

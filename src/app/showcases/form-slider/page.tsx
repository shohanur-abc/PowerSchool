'use client';

import { FormSlider } from '@/components/molecules/form-slider';
import { useForm, FormProvider } from 'react-hook-form';

export default function FormSliderPage() {
    const methods = useForm({
        defaultValues: {
            basic: 50,
            withValue: 30,
            volume: 70,
            percentage: 0,
            steps: 5,
        },
    });

    return (
        <FormProvider {...methods}>
            <div className="space-y-16 py-8">
                <div>
                    <h2 className="text-lg font-semibold mb-4">Basic Slider</h2>
                    <div className="max-w-md space-y-4">
                        <FormSlider name="basic" label="Value" />
                    </div>
                </div>

                <div>
                    <h2 className="text-lg font-semibold mb-4">With Value Display</h2>
                    <div className="max-w-md space-y-4">
                        <FormSlider
                            name="withValue"
                            label="Brightness"
                            showValue
                            description="Adjust screen brightness"
                        />
                    </div>
                </div>

                <div>
                    <h2 className="text-lg font-semibold mb-4">Volume Control (0-100)</h2>
                    <div className="max-w-md space-y-4">
                        <FormSlider
                            name="volume"
                            label="Volume"
                            min={0}
                            max={100}
                            step={5}
                            showValue
                        />
                    </div>
                </div>

                <div>
                    <h2 className="text-lg font-semibold mb-4">Percentage (0-100, step 10)</h2>
                    <div className="max-w-md space-y-4">
                        <FormSlider
                            name="percentage"
                            label="Discount"
                            min={0}
                            max={100}
                            step={10}
                            showValue
                            description="Set the discount percentage"
                        />
                    </div>
                </div>

                <div>
                    <h2 className="text-lg font-semibold mb-4">Rating (1-10)</h2>
                    <div className="max-w-md space-y-4">
                        <FormSlider
                            name="steps"
                            label="Difficulty Rating"
                            min={1}
                            max={10}
                            step={1}
                            showValue
                            description="Rate the difficulty from 1 (easy) to 10 (hard)"
                        />
                    </div>
                </div>
            </div>
        </FormProvider>
    );
}

"use client";
import { WeatherCard } from '@/components/molecules/weather-card';

export default function WeatherCardPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Sunny Day</h2>
                <div className="max-w-xs">
                    <WeatherCard
                        temperature={28}
                        condition="Sunny"
                        location="New York, USA"
                        high={31}
                        low={22}
                    />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Rainy Day</h2>
                <div className="max-w-xs">
                    <WeatherCard
                        temperature={15}
                        condition="Rainy"
                        location="London, UK"
                        high={18}
                        low={12}
                    />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Cloudy</h2>
                <div className="max-w-xs">
                    <WeatherCard
                        temperature={20}
                        condition="Partly Cloudy"
                        location="San Francisco, CA"
                        high={23}
                        low={16}
                    />
                </div>
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Minimal (no extras)</h2>
                <div className="max-w-xs">
                    <WeatherCard temperature={35} condition="Hot" />
                </div>
            </div>
        </div>
    );
}

import '../styles/globals.css';
import { ViewTransitions } from 'next-view-transitions';
import { Tracking } from './tracking';

export default function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ViewTransitions>
            <html lang="en">
                <head>
                    <title>Stu Kabakoff</title>
                    <meta
                        name="description"
                        content="Code, art, and other hobbies by Stu Kabakoff"
                    />
                </head>
                <link rel="icon" href="/self.png" />
                <body>{children}</body>
                <script
                    async
                    defer
                    data-website-id="a532bc4e-7350-43af-b105-b2f31da13b49"
                    src="/umami.js"
                />
                <Tracking />
            </html>
        </ViewTransitions>
    );
}

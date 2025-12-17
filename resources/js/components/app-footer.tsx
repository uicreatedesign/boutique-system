export function AppFooter() {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="mt-auto border-t bg-background py-4 text-center text-sm text-muted-foreground">
            <div className="container mx-auto px-4">
                <p>
                    © {currentYear} Boutique Management System v1.0.0 - All rights reserved
                </p>
            </div>
        </footer>
    );
}

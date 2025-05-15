'use client';

import { useLinkedPinterestAccounts } from '@/hooks/use-linked-accounts';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2, Plus } from 'lucide-react';

export default function Accounts() {
    const {
        pinterestAccountsData,
        isPinterestAccountsLoading,
        isPinterestAccountsError,
        error: pinterestAccountsError,
    } = useLinkedPinterestAccounts();

    const handleAddAccount = () => {
        window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/pinterest/auth`;
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-10">
            <h1 className="text-2xl font-semibold mb-6">Linked Pinterest Accounts</h1>

            {isPinterestAccountsLoading && (
                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                    <Loader2 className="animate-spin h-5 w-5" />
                    <span>Loading accounts...</span>
                </div>
            )}

            {isPinterestAccountsError && (
                <Alert variant="destructive" className="mb-4">
                    <AlertDescription>
                        {pinterestAccountsError?.message || 'Failed to load accounts. Please try again.'}
                    </AlertDescription>
                </Alert>
            )}

            {!isPinterestAccountsLoading && pinterestAccountsData?.length === 0 && (
                <p className="text-muted-foreground mb-4">No Pinterest accounts linked yet.</p>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {pinterestAccountsData?.map((acc) => (
                    <Card key={acc.pinterestId}>
                        <CardContent className="flex items-center space-x-4 py-4">
                            <img
                                src={acc.profileImage}
                                alt={`${acc.username}'s profile`}
                                className="w-12 h-12 rounded-full border"
                            />
                            <div className="flex-1">
                                <div className="font-medium">{acc.username}</div>
                                <p className="text-sm text-muted-foreground capitalize">{acc.accountType}</p>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="flex justify-start">
                <Button onClick={handleAddAccount} variant="outline">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Pinterest Account
                </Button>
            </div>
        </div>
    );
}
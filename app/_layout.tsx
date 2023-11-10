import { useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';
import { ClerkProvider, useAuth } from '@clerk/clerk-expo';
import { Slot, useRouter, useSegments } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SocketProvider } from '../providers/SocketProvider';

const CLERK_PUBLISHABLE_KEY = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

// Cache the Clerk JWT
const tokenCache = {
	async getToken(key: string) {
		try {
			return SecureStore.getItemAsync(key);
		} catch (err) {
			return null;
		}
	},
	async saveToken(key: string, value: string) {
		try {
			return SecureStore.setItemAsync(key, value);
		} catch (err) {
			return;
		}
	}
};

const InitialLayout = () => {
	const { isLoaded, isSignedIn } = useAuth();
	const segments = useSegments();
	const router = useRouter();

	// If the user is signed in, redirect them to the home page
	// If the user is not signed in, redirect them to the login page
	useEffect(() => {
		if (!isLoaded) return;

		
		if (isSignedIn) {
			router.replace('/(auth)/home');
		} else if (!isSignedIn) {
			router.replace('/(public)/login');
		}
	}, [isSignedIn]);

	return <Slot />;
};

const RootLayoutNav = () => {
	return (
    <SocketProvider>
        <SafeAreaProvider>
		<ClerkProvider publishableKey={"pk_test_aGFuZHktam9leS05Ny5jbGVyay5hY2NvdW50cy5kZXYk"} tokenCache={tokenCache}>
			<InitialLayout />
		</ClerkProvider>
        </SafeAreaProvider>
        </SocketProvider>
	);
};

export default RootLayoutNav;

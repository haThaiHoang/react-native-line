declare module 'react-native-line-sdk-ex' {
	import React from 'react';

	interface Profile {
		displayName: string;
		userID: string;
		statusMessage: string;
		pictureURL?: string;
	}

	interface AccessToken {
		accessToken: string;
		expirationDate: string;
	}

	export function login(): Promise<{
		profile: Profile,
		accessToken: AccessToken,
	}>;

	export function loginWithPermissions(permissions: string[]): Promise<{
		profile: Profile,
		accessToken: AccessToken,
	}>;

	export function currentAccessToken(): Promise<AccessToken>;
	export function getUserProfile(): Promise<Profile>;
	export function logout(): Promise<void>;
}
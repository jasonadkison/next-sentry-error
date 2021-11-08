/* eslint-disable no-restricted-globals */
import { clientsClaim, skipWaiting } from 'workbox-core';
import { precacheAndRoute } from 'workbox-precaching';

skipWaiting();
clientsClaim();

precacheAndRoute(self.__WB_MANIFEST || []);

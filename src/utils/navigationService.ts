import {createNavigationContainerRef} from '@react-navigation/native';
import {DrawerActions} from '@react-navigation/native';
import {Routes} from 'navigation/types';

export const navigationRef = createNavigationContainerRef();

export function navigate<TRouteName extends keyof Routes>(
  name: TRouteName,
  params?: any,
) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name as never, params as never);
  }
}

export function goBack() {
  if (navigationRef.isReady() && navigationRef.canGoBack()) {
    navigationRef.goBack();
  }
}

export function openDrawer() {
  navigationRef.dispatch(DrawerActions.openDrawer());
}

export function closeDrawer() {
  navigationRef.dispatch(DrawerActions.closeDrawer());
}

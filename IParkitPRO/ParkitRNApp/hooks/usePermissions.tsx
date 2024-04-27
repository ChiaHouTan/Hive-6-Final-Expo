// usePermissions.js
import { useState } from 'react';
import { Platform } from 'react-native';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';

const usePermissions = () => {
  const [permissionStatus, setPermissionStatus] = useState(null);

  const requestPermission = async (type) => {
    let permissionType;

    switch (type) {
      case 'microphone':
        permissionType = Platform.OS === 'ios' ? PERMISSIONS.IOS.MICROPHONE : PERMISSIONS.ANDROID.RECORD_AUDIO;
        break;
    
      default:
        return;
    }

    const result = await request(permissionType);
    setPermissionStatus(result);
    return result === RESULTS.GRANTED;
  };

  return { requestPermission, permissionStatus };
};

export default usePermissions;

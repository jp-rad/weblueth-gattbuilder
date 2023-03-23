/**
 * canonical UUID by name, alias, uuid.
 * services:
 *   https://github.com/WebBluetoothCG/registries/blob/master/gatt_assigned_services.txt
 * characteristics:
 *   https://github.com/WebBluetoothCG/registries/blob/master/gatt_assigned_characteristics.txt
 * descriptors:
 *   https://github.com/WebBluetoothCG/registries/blob/master/gatt_assigned_descriptors.txt
 */
declare module BluetoothUUID {
    export function getService(name: string): string;
    export function getCharacteristic(name: string): string;
    export function getDescriptor(name: string): string;
    export function canonicalUUID(alias: string): string;
}

export function canonicalServiceUUID(uuid: string) {
    return uuid.startsWith("0x") ?
        BluetoothUUID.canonicalUUID(uuid)
        : BluetoothUUID.getService(uuid);
}

export function canonicalCharacteristicUUID(uuid: string) {
    return uuid.startsWith("0x") ?
        BluetoothUUID.canonicalUUID(uuid)
        : BluetoothUUID.getCharacteristic(uuid);
}

export function canonicalDescriptorUUID(uuid: string) {
    return uuid.startsWith("0x") ?
        BluetoothUUID.canonicalUUID(uuid)
        : BluetoothUUID.getDescriptor(uuid);
}

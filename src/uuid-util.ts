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
    export function getService(name: BluetoothServiceUUID): BluetoothServiceUUID;
    export function getCharacteristic(name: BluetoothCharacteristicUUID): BluetoothCharacteristicUUID;
    export function getDescriptor(name: BluetoothDescriptorUUID): BluetoothDescriptorUUID;
    export function canonicalUUID(alias: BluetoothServiceUUID | BluetoothCharacteristicUUID | BluetoothDescriptorUUID): BluetoothServiceUUID | BluetoothCharacteristicUUID | BluetoothDescriptorUUID;
}

export function canonicalServiceUUID(uuid: BluetoothServiceUUID) {
    return (uuid as string).startsWith("0x") ?
        BluetoothUUID.canonicalUUID(uuid)
        : BluetoothUUID.getService(uuid);
}

export function canonicalCharacteristicUUID(uuid: BluetoothCharacteristicUUID) {
    return (uuid as string).startsWith("0x") ?
        BluetoothUUID.canonicalUUID(uuid)
        : BluetoothUUID.getCharacteristic(uuid);
}

export function canonicalDescriptorUUID(uuid: BluetoothDescriptorUUID) {
    return (uuid as string).startsWith("0x") ?
        BluetoothUUID.canonicalUUID(uuid)
        : BluetoothUUID.getDescriptor(uuid);
}

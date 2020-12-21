export interface LaunchModel {
    links?: LaunchLinks;
    mission_name: string;
    flight_number: number;
    mission_id: Array<string>;
    launch_year: string;
    launch_success: boolean;
    launch_landing?: boolean;
}

interface LaunchLinks {
    mission_patch_small: string;
}

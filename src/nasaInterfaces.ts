export interface PhotoI {
    id: number;
    sol: number;
    camera: CameraI;
    img_src: string;
    earth_date: string;
    rover: RoverI;
}

export interface CameraI {
    id: number;
    name: string;
    rover_id: number;
    full_name: string;
}

export interface RoverI {
    id: number;
    name: string;
    landing_data: string;
    launch_date: string;
    status: string;
}

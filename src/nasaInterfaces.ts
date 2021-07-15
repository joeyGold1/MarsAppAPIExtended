export interface PhotoI {
    id: number;
    sol: number;
    camera: CameraI;
    img_src: string;
    earth_date: string;
    rover: RoverBaseI;
}

export interface CameraI {
    id: number;
    name: string;
    rover_id: number;
    full_name: string;
}

export interface RoverBaseI {
    id: number;
    name: string;
    landing_date: string;
    launch_date: string;
    status: string;
}

export interface RoverFullI extends RoverBaseI{
    max_sol:number;
    max_date:string;
    cameras: CameraI;
}
export const servers: {name: string, state: string, remarks: string} [] = [
  {'name': 'Production', 'state': 'Online', 'remarks':'Good'},
  {'name': 'Test', 'state': 'Offline', 'remarks':'Good'},
  {'name': 'Development', 'state': 'Online', 'remarks':'Bad'}
];

export interface GitUserResponse {
    login: string;
    bio: string;
    company: string;
    location: string;
    updated_at: string;
}
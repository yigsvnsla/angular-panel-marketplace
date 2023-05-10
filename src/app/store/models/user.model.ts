
export interface UserModel {

  id: number;

  role: number | UserRole
  //   Tabla: Usuarios
  // - ID(int, primary key)
  //   - Nombre(varchar)
  //   - Correo electrónico(varchar)
  //     - Contraseña(varchar)
  //     - Teléfono(varchar)
  //     - Rol_ID(int, foreign key)

  // Tabla: Roles
  //   - ID(int, primary key)
  //   - Nombre(varchar)
  //   - Descripción(varchar)

}




interface UserRole {

  id:number
  name:string;

}

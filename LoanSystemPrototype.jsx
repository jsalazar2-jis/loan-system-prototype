
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function LoanSystemPrototype() {
  const [screen, setScreen] = useState("login");

  const screens = {
    login: (
      <Card className="max-w-md mx-auto mt-20">
        <CardContent className="space-y-4">
          <h2 className="text-xl font-bold">Inicio de Sesión</h2>
          <input placeholder="Usuario" className="w-full border p-2" />
          <input placeholder="Contraseña" type="password" className="w-full border p-2" />
          <Button className="w-full" onClick={() => setScreen("dashboard")}>
            Ingresar
          </Button>
        </CardContent>
      </Card>
    ),

    dashboard: (
      <Card className="max-w-2xl mx-auto mt-10">
        <CardContent className="space-y-4">
          <h2 className="text-xl font-bold">Dashboard</h2>
          <div className="grid grid-cols-2 gap-4">
            <Button onClick={() => setScreen("solicitud")}>Nueva Solicitud</Button>
            <Button onClick={() => setScreen("evaluacion")}>Evaluar Solicitudes</Button>
            <Button onClick={() => setScreen("pagos")}>Registrar Pago</Button>
            <Button onClick={() => setScreen("mora")}>Gestión de Mora</Button>
          </div>
        </CardContent>
      </Card>
    ),

    solicitud: (
      <Card className="max-w-2xl mx-auto mt-10">
        <CardContent className="space-y-3">
          <h2 className="text-xl font-bold">Solicitud de Préstamo</h2>
          <input placeholder="Nombre del Cliente" className="w-full border p-2" />
          <input placeholder="Monto solicitado" className="w-full border p-2" />
          <input placeholder="Plazo en meses" className="w-full border p-2" />
          <div className="flex gap-2">
            <Button onClick={() => setScreen("dashboard")}>Guardar</Button>
            <Button variant="secondary" onClick={() => setScreen("dashboard")}>Cancelar</Button>
          </div>
        </CardContent>
      </Card>
    ),

    evaluacion: (
      <Card className="max-w-2xl mx-auto mt-10">
        <CardContent className="space-y-3">
          <h2 className="text-xl font-bold">Evaluación de Solicitud</h2>
          <p>Solicitud #12345 – Monto Q50,000</p>
          <textarea placeholder="Observaciones" className="w-full border p-2" />
          <div className="flex gap-2">
            <Button>Aprobar</Button>
            <Button variant="destructive">Rechazar</Button>
            <Button variant="secondary" onClick={() => setScreen("dashboard")}>Volver</Button>
          </div>
        </CardContent>
      </Card>
    ),

    pagos: (
      <Card className="max-w-2xl mx-auto mt-10">
        <CardContent className="space-y-3">
          <h2 className="text-xl font-bold">Registro de Pago</h2>
          <input placeholder="Número de Préstamo" className="w-full border p-2" />
          <input placeholder="Monto pagado" className="w-full border p-2" />
          <div className="flex gap-2">
            <Button>Registrar</Button>
            <Button variant="secondary" onClick={() => setScreen("dashboard")}>Volver</Button>
          </div>
        </CardContent>
      </Card>
    ),

    mora: (
      <Card className="max-w-2xl mx-auto mt-10">
        <CardContent className="space-y-3">
          <h2 className="text-xl font-bold">Gestión de Mora</h2>
          <p>Préstamo #45678 – 15 días de atraso</p>
          <Button variant="secondary" onClick={() => setScreen("dashboard")}>Volver</Button>
        </CardContent>
      </Card>
    ),
  };

  return <div className="p-4">{screens[screen]}</div>;
}

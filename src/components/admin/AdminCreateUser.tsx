import { useState, type ChangeEvent, type FormEvent } from 'react'
import { createUser } from '../../firebase/db';

interface ClientFormData {
  name: string;
  dni: string;
}

interface FormErrors {
  name?: string;
  dni?: string;
}

interface FormularioCrearClienteProps {
  onSubmit?: (data: ClientFormData) => void;
  onCancel?: () => void;
}

export default function AdminCreateUser ({
  onCancel
}: FormularioCrearClienteProps) {
  const [formData, setFormData] = useState<ClientFormData>({
    name: '',
    dni: ''
  })

  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {}
    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es obligatorio.'
    }
    if (!formData.dni.trim()) {
      newErrors.dni = 'El DNI es obligatorio.'
    } else if (!/^\d{7,8}$/.test(formData.dni.trim())) {
      newErrors.dni = 'Ingresa un DNI válido (7 u 8 dígitos).'
    }
    return newErrors
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const validationErrors = validate()

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    createUser(formData)

    setFormData({ name: '', dni: '' })
  }

  return (
    <div className="md:col-span-6 bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-[#EFE8DC] shadow-sm text-[#2D241E]">
      {/* Encabezado de la Tarjeta */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#EFE8DC]">
        <div className="p-2.5 bg-[#F2D7CD] rounded-xl text-[#703B2B]">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
          </svg>
        </div>
        <div>
          <h3 className="text-lg font-bold text-[#1C130D]">Crear Nuevo Cliente</h3>
          <p className="text-xs text-[#65584D]">Ingresa los datos para registrar al cliente en el sistema.</p>
        </div>
      </div>

      {/* Formulario */}
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Campo Nombre Completo */}
        <div>
          <label htmlFor="nombre" className="block text-xs font-semibold text-[#65584D] mb-1.5">
            Nombre Completo
          </label>
          <div className="relative">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8C7A6B]">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </span>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Ej. Juan Pérez"
              className={`w-full pl-10 pr-4 py-2.5 bg-[#FAF7F2] border ${
                errors.name ? 'border-red-500' : 'border-[#E3D9CC]'
              } rounded-xl text-sm text-[#1C130D] placeholder-[#A09386] focus:outline-none focus:ring-2 focus:ring-[#C89B7B] transition-all`}
            />
          </div>
          {errors.name && (
            <p className="text-xs text-red-600 mt-1 pl-1">{errors.name}</p>
          )}
        </div>

        {/* Campo DNI */}
        <div>
          <label htmlFor="dni" className="block text-xs font-semibold text-[#65584D] mb-1.5">
            DNI / Documento
          </label>
          <div className="relative">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8C7A6B]">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
              </svg>
            </span>
            <input
              type="text"
              id="dni"
              name="dni"
              value={formData.dni}
              onChange={handleChange}
              placeholder="Ej. 12345678"
              maxLength={8}
              className={`w-full pl-10 pr-4 py-2.5 bg-[#FAF7F2] border ${
                errors.dni ? 'border-red-500' : 'border-[#E3D9CC]'
              } rounded-xl text-sm text-[#1C130D] placeholder-[#A09386] focus:outline-none focus:ring-2 focus:ring-[#C89B7B] transition-all`}
            />
          </div>
          {errors.dni && (
            <p className="text-xs text-red-600 mt-1 pl-1">{errors.dni}</p>
          )}
        </div>

        {/* Botones de Acción */}
        <div className="pt-3 flex items-center justify-end gap-3">
          {onCancel && (
            <button
              type="button"
              onClick={onCancel}
              className="px-4 py-2.5 rounded-xl font-medium text-sm text-[#65584D] hover:bg-[#EFE8DC] transition-colors"
            >
              Cancelar
            </button>
          )}
          <button
            type="submit"
            className="w-full sm:w-auto bg-[#1C130D] hover:bg-[#332318] text-white px-6 py-2.5 rounded-xl font-medium text-sm transition-colors flex items-center justify-center gap-2 shadow-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            Guardar Cliente
          </button>
        </div>
      </form>
    </div>
  );
}
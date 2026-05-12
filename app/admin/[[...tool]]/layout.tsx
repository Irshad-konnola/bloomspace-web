export const metadata = {
  title: 'Bloomspace Admin',
  description: 'Content Management System',
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        {children}
      </body>
    </html>
  )
}
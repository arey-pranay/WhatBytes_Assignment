import React, { useState } from "react";
import Layout from "../components/Layout";
import Modal from "../components/Modal";
import PageContainer from "@/components/PageContainer";
import Header from "@/components/Header";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Layout>
      <PageContainer setIsModalOpen={setIsModalOpen} />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </Layout>
  );
}
